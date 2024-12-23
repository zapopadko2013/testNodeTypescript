export const getuUpvot = {
  tags: ['Голосование'],
  description: 'Возврат голосований для выбранного пользователя',
  operationId: 'getuUpvot',
  security: [
    {
      bearerAuth: [],
    },
  ],
  
  responses: {
    '200': {
      description: 'Голосование',
      content: {
        'application/json': {
          schema: {
            "$ref": "#/components/schemas/Upvot"            
          },
        },
      },
    },
  },
  parameters: [ {
    description: "Выберите пользователя",
    name: "id",
    in: "path",
    required: true,
    type: "integer"
  }
],
};



