export const updateUsersId = {
    tags: ['Пользователи'],
    description: 'Обновление выбранного пользователя',
    operationId: 'updateUsersId',
    security: [
      {
        bearerAuth: [],
      },
    ],
   
    requestBody: {
        description: "Обновить пользователя",
        
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
  
  