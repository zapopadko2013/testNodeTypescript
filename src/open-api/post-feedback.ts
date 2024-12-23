export const postFeedback = {
    tags: ['Предложение'],
    description: 'Добавление предложения',
    operationId: 'postFeedback',
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      description: "Добавить предлдожение",
      
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
        description: 'Добавлено предложение',
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
  
  