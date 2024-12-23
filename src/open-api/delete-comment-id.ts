export const deleteCommentId = {
    tags: ['Комментарии'],
    description: 'Удаление выбранного комментария',
    operationId: 'deleteCommentId',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [ {
        description: "Выберите комментарий",
        name: "id",
        in: "path",
        required: true,
        type: "integer"
      }
    ],
    
    
   
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
  
  
  
  