export const getFeedbacks = {
  tags: ['Предложение'],
  description: 'Возврат всех предложений',
  operationId: 'getFeedbacks',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Список предложений',
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



