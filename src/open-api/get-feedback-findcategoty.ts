export const getFeedbackIdCategory = {
  tags: ['Предложение'],
  description: 'Возврат выбраных предложений по категории',
  operationId: 'getFeedbackIdCategory',
  security: [
    {
      bearerAuth: [],
    },
  ],
  
  responses: {
    '200': {
      description: 'Предложения',
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
    description: "Выберите категорию",
    name: "category",
    in: "query",
    required: true,
    type: "string"
  }
],
};



