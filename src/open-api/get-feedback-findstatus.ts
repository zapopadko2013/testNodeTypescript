export const getFeedbackIdFindStatus = {
  tags: ['Предложение'],
  description: 'Возврат выбраных предложений по статусу',
  operationId: 'getFeedbackIdFindStatus',
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
    description: "Выберите статус",
    name: "status",
    in: "query",
    required: true,
    type: "string"
  }
],
};



