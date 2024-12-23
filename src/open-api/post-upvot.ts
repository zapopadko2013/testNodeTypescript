export const postUpvot = {
    tags: ['Голосование'],
    description: 'Добавление голосования',
    operationId: 'postUpvot',
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      description: "Добавить голосование",
      
      content: {
        "application/json": {
          schema: {
            
              $ref: '#/components/schemas/Upvot'
           
          }
        }
      }
    },
    
    
    responses: {
      '200': {
        description: 'Добавлено голосование',
        content: {
          'application/json': {
            schema: {
             "$ref": "#/components/schemas/Upvot" 
            },
          },
        },
      },
    },
  };
  
  