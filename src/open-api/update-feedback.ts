export const updateFeedbackId = {
    tags: ['Предложение'],
    description: 'Обновление выбранного пользователя',
    operationId: 'updateFeedbackId',
    security: [
      {
        bearerAuth: [],
      },
    ],
   
    requestBody: {
        description: "Обновить предложение",
        
        content: {
          "application/json": {
            schema: {
              
                $ref: '#/components/schemas/Feedback'
             
            }
          }
        }
      },
    
   
    responses: {
      '200': {
        description: 'Предложение',
        content: {
          'application/json': {
            schema: {
              "$ref": "#/components/schemas/Feedback"            
            },
          },
        },
      },
    },
  
  };
  
  