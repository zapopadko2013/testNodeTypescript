export const getfUpvot = {
  tags: ['Голосование'],
  description: 'Возврат голосований по выбранному предложению',
  operationId: 'getfUpvot',
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
      description: 'Список голосований',
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



