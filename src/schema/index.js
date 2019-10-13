// Import External Dependancies
const graphql = require('graphql');

// Destructure GraphQL functions
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLList,
} = graphql;

// Import Controllers
const userController = require('../controllers/UserController');
const alertController = require('../controllers/AlertController');



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
				return await alertController.getAlerts({ id: parent._id })
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
			type: new GraphQLList(GraphQLString)
		}
	})
});

// Define Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: userType,
			args: { id: { type: GraphQLID } },
			async resolve(parent, args) {
				return await userController.getUser(args)
			}
		},
		alert: {
			type: alertType,
			args: { id: { type: GraphQLID } },
			async resolve(parent, args) {
				return await alertController.getAlert(args)
			}
		}
	}
});



// Export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
});
