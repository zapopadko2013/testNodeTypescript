export const postComment = {
    tags: ['Комментарии'],
    description: 'Добавление комментария',
    operationId: 'postComment',
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      description: "Добавить комментарий",
      
      content: {
        "application/json": {
          schema: {
            
              $ref: '#/components/schemas/Comment'
           
          }
        }
      }
    },
    
    
    responses: {
      '200': {
        description: 'Добавлен комментарий',
        content: {
          'application/json': {
            schema: {
             "$ref": "#/components/schemas/Comment" 
            },
          },
        },
      },
    },
  };
  
  