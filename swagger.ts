import { getUsers } from './src/open-api/get-users';
import { postUsers } from './src/open-api/post-users';
import { getUsersId } from './src/open-api/get-users-id';
import { deleteUsersId } from './src/open-api/delete-users-id';
import { updateUsersId } from './src/open-api/update-users';
import { updateUsersPart } from './src/open-api/update-users-part';

import { getComments } from './src/open-api/get-comment';
import { postComment } from './src/open-api/post-comment';
import { getCommentId } from './src/open-api/get-comment-id';
import { deleteCommentId } from './src/open-api/delete-comment-id';
import { updateCommentId } from './src/open-api/update-comment';

import { postUpvot } from './src/open-api/post-upvot';
import { getfUpvot } from './src/open-api/getf-upvot';
import { getuUpvot } from './src/open-api/getu-upvot';
import { getсUpvot } from './src/open-api/getcount-upvot';

import { postFeedback } from './src/open-api/post-feedback';
import { getFeedbacks } from './src/open-api/get-feedback';
import { getFeedbackId } from './src/open-api/get-feedback-id';
import { updateFeedbackId } from './src/open-api/update-feedback';
import { deleteFeedbackId } from './src/open-api/delete-feedback-id';
import { getFeedbacksCategory } from './src/open-api/get-feedback-category';
import { getFeedbacksStatus } from './src/open-api/get-feedback-status';
import { getFeedbackIdCategory } from './src/open-api/get-feedback-findcategoty';
import { getFeedbackIdFindStatus } from './src/open-api/get-feedback-findstatus';


export const swaggerDocument = {
  openapi: '3.0.3',
  
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'Тест',
    termsOfService: '',
    contact: {
      name: 'Запопадько Роман',
      email: 'zapopadko2013@mail.ru',
      
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  tags: [
    {
      name: 'Тест',
    },
  ],
  paths: {
    

    '/user/create': {
      post: postUsers,
    },
    '/user/getall': {
      get: getUsers,
    },
    '/user/get/{id}': {
      get: getUsersId,
    },
    '/user/update': {
      put: updateUsersId,
    },
    '/user/delete/{id}': {
      delete: deleteUsersId,
    },
    '/user/updatepart': {
      put: updateUsersPart,
    },

    '/comment/create': {
      post: postComment,
    },
    '/comment/getall': {
      get: getComments,
    },
    '/comment/get/{id}': {
      get: getCommentId,
    },
    '/comment/update': {
      put: updateCommentId,
    },
    '/comment/delete/{id}': {
      delete: deleteCommentId,
    },

    '/upvot/create': {
      post: postUpvot,
    },
    '/upvot/getf/{id}': {
      get: getfUpvot,
    },
    '/upvot/getu/{id}': {
      get: getuUpvot,
    },
    '/upvot/getcount/{id}': {
      get: getсUpvot,
    },

    '/feedback/create': {
      post: postFeedback,
    },
    '/feedback/getall': {
      get: getFeedbacks,
    },
    '/feedback/get/{id}': {
      get: getFeedbackId,
    },
    '/feedback/update': {
      put: updateFeedbackId,
    },
    '/feedback/delete/:id': {
      delete: deleteFeedbackId,
    },
    '/feedback/getcategory': {
      get: getFeedbacksCategory,
    },
    '/feedback/getstatus': {
      get: getFeedbacksStatus,
    },
    '/feedback/getcategoryfind': {
      get: getFeedbackIdCategory,
    },
    '/feedback/getstatusfind': {
      get: getFeedbackIdFindStatus,
    },




  },
  servers: [
    {
      url: 'http://localhost:8080/api/v1',
      description: 'Local server',
    },
    {
      url: 'https://your_production_url/api/v1',
      description: 'Production Env',
    },
    
  ],
  headers: [
  {
     "Access-Control-Allow-Origin": ['*'],
     "Access-Control-Allow-Headers": ['*']
   
  }
  ],
  components: {
   schemas: {
    User:{
      type: "object",
      // required: true,
      properties: {
        id: {
          type: 'integer',
          description: 'User ID',
        },
        avatar: {
          type: 'string',
          description: 'User Avatar',
        },
        email: {
          type: 'string',
          description: 'User Email',
        },
        password: {
          type: 'string',
          description: 'User Password',
        },
        created_at: {
          type: 'string',
          format: 'date-time',
          description: 'User Created',
        },
      }
    },

    Feedback:{
      type: "object",
      properties: {
        id: {
          type: 'integer',
          description: 'Feedback ID',
        },
        title: {
          type: 'string',
          description: 'Feedback title',
        },
        description: {
          type: 'string',
          description: 'Feedback description',
        },
        category: {
          type: 'string',
          description: 'Feedback category',
        },
        status: {
          type: 'string',
          description: 'Feedback status',
        },
        author_id: {
          type: 'integer',
          description: 'Feedback user',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
          description: 'Feedback Created',
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
          description: 'Feedback Updated',
        },
      }
    },
    Comment:{
      type: "object",
      properties: {
        id: {
          type: 'integer',
          description: 'Comment ID',
        },
        content: {
          type: 'string',
          description: 'Comment Content',
        },
        author_id: {
          type: 'integer',
          description: 'Comment Author_id',
        },
        post_id: {
          type: 'integer',
          description: 'Comment Post_id',
        },
        parent_comment_id: {
          type: 'integer',
          description: 'Comment Parent_comment_id',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
          description: 'Comment Created',
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
          description: 'Comment Updated',
        },
      }
    },
    Upvot:{
      type: "object",
      properties: {
        id: {
          type: 'integer',
          description: 'Upvot ID',
        },
        author_id: {
          type: 'integer',
          description: 'Upvot Author_id',
        },
        post_id: {
          type: 'integer',
          description: 'Upvot Post_id',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
          description: 'Upvot Created',
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
          description: 'Upvot Updated',
        },
      }
    },

   }
  }


};

