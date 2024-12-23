export const getFeedbacksCategory = {
  tags: ['Предложение'],
  description: 'Возврат всех категорий предложений',
  operationId: 'getFeedbacksCategory',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Список категорий предложений',
      "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "category": {
              "type": "string"
            }
          }
        }
      }
    }
    },
  },
};



