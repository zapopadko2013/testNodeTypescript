export const updateCommentId = {
    tags: ['Комментарии'],
    description: 'Обновление выбранного комментария',
    operationId: 'updateCommentId',
    security: [
      {
        bearerAuth: [],
      },
    ],
    
    requestBody: {
        description: "Обновить комментарий",
        
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
        description: 'Комментарий',
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
  
  