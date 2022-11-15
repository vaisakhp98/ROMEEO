export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "romeeoedddc7cb": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        },
        "userPoolGroups": {
            "AdminsGroupRole": "string",
            "UsersGroupRole": "string"
        }
    },
    "api": {
        "romeeo": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "romeeo": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "AdminQueriesd85a5732": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}