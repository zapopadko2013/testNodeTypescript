export const deleteFeedbackId = {
    tags: ['Предложение'],
    description: 'Удаление выбранного предложения',
    operationId: 'deleteFeedbackId',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [ {
        description: "Выберите предложение",
        name: "id",
        in: "path",
        required: true,
        type: "integer"
      }
    ],
    
    
   
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
  
  
  
  