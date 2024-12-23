export const getFeedbacksStatus = {
  tags: ['Предложение'],
  description: 'Возврат всех статусов предложений',
  operationId: 'getFeedbacksStatus',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Список статусов предложений',
      "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "status": {
              "type": "string"
            }
          }
        }
      }
    }
    },
  },
};



