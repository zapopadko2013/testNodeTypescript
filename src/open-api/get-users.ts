export const getUsers = {
  tags: ['Пользователи'],
  description: 'Возврат всех пользователей системы',
  operationId: 'getUsers',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Список пользователей',
      content: {
        'application/json': {
          schema: {
            "$ref": "#/components/schemas/User"            
          },
        },
      },
    },
  },
};



