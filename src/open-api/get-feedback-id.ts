export const getFeedbackId = {
  tags: ['Предложение'],
  description: 'Возврат выбранного предложения',
  operationId: 'getFeedbackId',
  security: [
    {
      bearerAuth: [],
    },
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
  parameters: [ {
    description: "Выберите предложение",
    name: "id",
    in: "path",
    required: true,
    type: "integer"
  }
],
};



