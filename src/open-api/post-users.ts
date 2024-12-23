export const postUsers = {
    tags: ['Пользователи'],
    description: 'Добавление пользователя',
    operationId: 'postUsers',
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      description: "Добавить пользователя",
      
      content: {
        "application/json": {
          schema: {
            
              $ref: '#/components/schemas/User'
           
          }
        }
      }
    },
    
    
    responses: {
      '200': {
        description: 'Добавлен пользователь',
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
  
  