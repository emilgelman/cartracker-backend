// Import External Dependancies
const graphql = require('graphql');

// Destructure GraphQL functions
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList,
	GraphQLNonNull
} = graphql;

// Import Controllers
const carController = require('../controllers/CarController');
const userController = require('../controllers/UserController');
const alertController = require('../controllers/AlertController');


const carType = new GraphQLObjectType({
	name: 'Car',
	fields: () => ({
		id: { type: GraphQLString },
		manufacturer: { type: GraphQLString },
		model: { type: GraphQLString },
		year: { type: GraphQLString },
	})
});

const userType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		_id: { type: GraphQLID },
		firstName: { type: GraphQLString },
		lastName: { type: GraphQLString },
		email: { type: GraphQLString },
		alerts: {
			type: new GraphQLList(alertType),
			async resolve(parent, args) {
				return await userController.getUserAlerts({ id: parent._id })
			}
		}
	})
});

const alertType = new GraphQLObjectType({
	name: 'Alert',
	fields: () => ({
		_id: { type: GraphQLID },
		user_id: { type: GraphQLID },
		cars: {
			type: new GraphQLList(carType),
			async resolve(parent, args) {
				return await alertController.getCarsForAlert({ id: parent._id })
			}
		}
	})
});

// Define Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		car: {
			type: carType,
			args: { id: { type: GraphQLID } },
			async resolve(parent, args) {
				return await carController.getSingleCar(args)
			}
		},
		cars: {
			type: new GraphQLList(carType),
			async resolve(parent, args) {
				return await carController.getCars()
			}
		},
		user: {
			type: userType,
			args: { id: { type: GraphQLID } },
			async resolve(parent, args) {
				return await userController.getSingleUser(args)
			}
		},
		alert: {
			type: alertType,
			args: { id: { type: GraphQLID } },
			async resolve(parent, args) {
				return await alertController.getSingleAlert(args)
			}
		}
	}
});

// Define Mutations
const Mutations = new GraphQLObjectType({
	name: 'Mutations',
	fields: {
		addCar: {
			type: carType,
			args: {
				manufacturer: { type: new GraphQLNonNull(GraphQLString) },
				model: { type: new GraphQLNonNull(GraphQLString) },
				year: { type: GraphQLString },
			},
			async resolve(parent, args) {
				return await carController.addCar(args);
			}
		},
		editCar: {
			type: carType,
			args: {
				manufacturer: { type: new GraphQLNonNull(GraphQLString) },
				model: { type: new GraphQLNonNull(GraphQLString) },
				year: { type: GraphQLString },
			},
			async resolve(parent, args) {
				return await carController.updateCar(args)
			}
		},
		deleteCar: {
			type: carType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) }
			},
			async resolve(parent, args) {
				return await carController.deleteCar(args)
			}
		}
	}
});

// Export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutations
});
