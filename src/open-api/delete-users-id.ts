export const deleteUsersId = {
    tags: ['Пользователи'],
    description: 'Удаление выбранного пользователя',
    operationId: 'deleteUsersId',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [ {
        description: "Выберите пользователя",
        name: "id",
        in: "path",
        required: true,
        type: "integer"
      }
    ],
    
    
   
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
  
  
  
  