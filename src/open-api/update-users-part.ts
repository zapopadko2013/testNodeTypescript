export const updateUsersPart = {
    tags: ['Пользователи'],
    description: 'Обновление email, avatar выбранного пользователя',
    operationId: 'updateUsersId',
    security: [
      {
        bearerAuth: [],
      },
    ],
   
    requestBody: {
      description: "Обновить пользователя",
        
      "content": {
       "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "description": "Введите id",
              "type": "integer"
            },
            "email": {
              "description": "Введите email",
              "type": "string"
            },
            "avatar": {
              "description": "Введите avatar",
              "type": "string"
            }
          }
        }
       }
      }
    },
    
   
    responses: {
      '200': {
        description: 'Пользователь',
        content: {
          'application/json': {
            schema: {
              "$ref": "#/components/schemas/User"            
            },
          },
        },
      },
    },
  
  };
  
  