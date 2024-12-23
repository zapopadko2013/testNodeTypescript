export const getсUpvot = {
  tags: ['Голосование'],
  description: 'Количество голосов по выбранному предложению',
  operationId: 'getUpvot',
  security: [
    {
      bearerAuth: [],
    },
  ],
  
  responses: {
    '200': {
      description: 'Количество голосов по выбранному предложению',
      "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "post_id": {
              "type": "string"
            },
            "count": {
              "type": "integer"
            }
          }
        }
      }
    }
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



