export const getUsersId = {
  tags: ['Пользователи'],
  description: 'Возврат выбранного пользователя',
  operationId: 'getUsersId',
  security: [
    {
      bearerAuth: [],
    },
  ],
  
  responses: {
    '200': {
      description: 'Пользователь',
      content: {
        'application/json': {
          schema: {
            "$ref": "#/components/schemas/User"            
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



