define({ "api": [
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetings/:meetingId/details",
    "title": "api for getting meeting details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of the Meeting. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"Meeting Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5b9a2581d1508e15f402fb36\",\n        \"createdOn\": \"2018-09-13T08:53:21.000Z\",\n        \"meetingPlace\": \"Golden Palace\",\n        \"meetingDescription\": \"Test Meeting for Updating\",\n        \"meetingEndDate\": \"2018-09-12T17:57:50.382Z\",\n        \"meetingStartDate\": \"2018-09-11T20:30:00.000Z\",\n        \"participantEmail\": \"pankajsaini982134@gmail.com\",\n        \"participantName\": \"ptemp saini\",\n        \"participantId\": \"B1cyuc8OX\",\n        \"hostName\": \"pankaj singh\",\n        \"hostId\": \"B1cyuc8OX\",\n        \"meetingTopic\": \"Test Meeting\",\n        \"meetingId\": \"rJttBsw_m\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "GetApiV1MeetingsMeetingidDetails"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetings/view/all/meetings/:userId",
    "title": "api for Getting all Meetings of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meetings Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5b9a2581d1508e15f402fb36\",\n            \"createdOn\": \"2018-09-13T08:53:21.000Z\",\n            \"meetingPlace\": \"Golden Palace\",\n            \"meetingDescription\": \"Test Meeting for Updating\",\n            \"meetingEndDate\": \"2018-09-12T17:57:50.382Z\",\n            \"meetingStartDate\": \"2018-09-11T20:30:00.000Z\",\n            \"participantEmail\": \"pankajsaini982134@gmail.com\",\n            \"participantName\": \"ptemp saini\",\n            \"participantId\": \"B1cyuc8OX\",\n            \"hostName\": \"pankaj singh\",\n            \"hostId\": \"B1cyuc8OX\",\n            \"meetingTopic\": \"Test Meeting\",\n            \"meetingId\": \"rJttBsw_m\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "GetApiV1MeetingsViewAllMeetingsUserid"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/addMeeting",
    "title": "api to Add Meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingTopic",
            "description": "<p>Topic of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hostId",
            "description": "<p>User Id of the user hosting Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hostName",
            "description": "<p>User Name of the user hosting Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "participantId",
            "description": "<p>User Id of the participant. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "participantName",
            "description": "<p>User Name of the participant. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "participantEmail",
            "description": "<p>Email of the participant. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingStartDate",
            "description": "<p>Start date/time of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingEndDate",
            "description": "<p>end date/time of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingDescription",
            "description": "<p>Description of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingPlace",
            "description": "<p>Place of Meeting. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meeting Created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5b9a2581d1508e15f402fb36\",\n        \"createdOn\": \"2018-09-13T08:53:21.000Z\",\n        \"meetingPlace\": \"temp\",\n        \"meetingDescription\": \"Test Meeting for Checking\",\n        \"meetingEndDate\": \"2018-09-12T17:57:50.382Z\",\n        \"meetingStartDate\": \"2018-09-11T20:30:00.000Z\",\n        \"participantEmail\": \"pankajsaini982134@gmail.com\",\n        \"participantName\": \"ptemp saini\",\n        \"participantId\": \"B1cyuc8OX\",\n        \"hostName\": \"pankaj singh\",\n        \"hostId\": \"B1cyuc8OX\",\n        \"meetingTopic\": \"Test Meeting\",\n        \"meetingId\": \"rJttBsw_m\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PostApiV1MeetingsAddmeeting"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/admin-meetings/sentReminders",
    "title": "api for sending reminders to the users of the meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the User. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"Meetings Found and reminders sent\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PostApiV1MeetingsAdminMeetingsSentreminders"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/:meetingId/delete",
    "title": "api to Delete Meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of the Meeting to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meeting Deleted\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Deleted the Meeting successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"_id\": \"5b9a2dac036ca203dc49534f\",\n            \"__v\": 0,\n            \"createdOn\": \"2018-09-13T09:28:12.000Z\",\n            \"meetingPlace\": \"Golden Palace\",\n            \"meetingDescription\": \"Test Meeting for Updating\",\n            \"meetingEndDate\": \"2018-09-12T17:57:50.382Z\",\n            \"meetingStartDate\": \"2018-09-11T20:30:00.000Z\",\n            \"participantEmail\": \"pankajsaini982134@gmail.com\",\n            \"participantName\": \"ptemp saini\",\n            \"participantId\": \"B1cyuc8OX\",\n            \"hostName\": \"pankaj singh\",\n            \"hostId\": \"B1cyuc8OX\",\n            \"meetingTopic\": \"Test Meeting\",\n            \"meetingId\": \"rkHhTovdm\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PostApiV1MeetingsMeetingidDelete"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/meetings/:meetingId/updateMeeting",
    "title": "api to Update Meeting Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>Id of the Meeting. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingTopic",
            "description": "<p>Topic of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingStartDate",
            "description": "<p>Start date/time of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingEndDate",
            "description": "<p>end date/time of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingDescription",
            "description": "<p>Description of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingPlace",
            "description": "<p>Place of Meeting. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meeting Updated\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Meeting details Updated\",\n        \"status\": 200,\n        \"data\": \"None\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PutApiV1MeetingsMeetingidUpdatemeeting"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api for Getting all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-12-12T13:42:58.000Z\",\n            \"emailVerified\": \"Yes\",\n            \"validationToken\": \"Null\",\n            \"email\": \"singhpankaj@gmail.com\",\n            \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n            \"mobileNumber\": \"91 7841262887\",\n            \"countryName\": \"India\",\n            \"lastName\": \"singh\",\n            \"firstName\": \"pankaj\",\n            \"userId\": \"B1cyuc8OX\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkJKc0NubExxWCIsImlhdCI6MTUzODgxNzIzNDUzNCwiZXhwIjoxNTM4OTAzNjM0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJsZXRzTWVldEFwcCIsImRhdGEiOnsiZnJpZW5kUmVxdWVzdFNlbnQiOltdLCJmcmllbmRSZXF1ZXN0UmVjaWV2ZWQiOltdLCJmcmllbmRzIjpbXSwiZW1haWxWZXJpZmllZCI6IlllcyIsInZhbGlkYXRpb25Ub2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpxZDNScFpDSTZJa0o1ZFdaTFRWTTFOeUlzSW1saGRDSTZNVFV6T0RjMU9Ea3lOemszTWl3aVpYaHdJam94TlRNNE9EUTFNekkzTENKemRXSWlPaUpoZFhSb1ZHOXJaVzRpTENKcGMzTWlPaUpzWlhSelRXVmxkRUZ3Y0NJc0ltUmhkR0VpT25zaVgybGtJam9pTldKaU56azFNbVJtWWpVNFpXRXhNVGM0TWpBMU9UQTBJaXdpWDE5Mklqb3dMQ0pqY21WaGRHVmtUMjRpT2lJeU1ERTRMVEV3TFRBMVZERTJPalExT2pNekxqQXdNRm9pTENKbGJXRnBiRlpsY21sbWFXVmtJam9pV1dWeklpd2lkbUZzYVdSaGRHbHZibFJ2YTJWdUlqb2lJaXdpWlcxaGFXd2lPaUp6YUdGb2NuVnJhSE5oZVhsbFpDNTBaV05vUUdkdFlXbHNMbU52YlNJc0luQmhjM04zYjNKa0lqb2lKREpoSkRFd0pGWXpZbXRLVjBKbFZHOXphelYwTlM0d2VreEVaQzVJZUhoaVMzY3djSGxTUTBkNE5rVTFjMlJpTDBZNWVXdEZMekJGVmtwbElpd2ljM1JoZEhWeklqb2liMlptYkdsdVpTSXNJbWx6UVdSdGFXNGlPaUoxYm1SbFptbHVaV1FpTENKdGIySnBiR1ZPZFcxaVpYSWlPaUk1TVNBM12EUXdPVFl5T0RnM0lpd2lZMjkxYm5SeWVVNWhiV1VpT2lKSlRpSXNJblZ6WlhKT1lXMWxJam9pZFc1a1pXWnBibVZrSWl3aWJHRnpkRTVoYldVaU9pSlRZWGw1WldRaUxDSm1hWEp6ZEU1aGJXVWlPaUpUYUdGb2NuVnJhQ0lzSW5WelpYSkpaQ0k2SWxOclFrVklabE01TnlKOWZRLm1ocWs0Y2JzX1gyX2dieWtvUExydlJTU2drOHF4elRLLVBtU2V4ZGZ4V3ciLCJlbWFpbCI6InNoYWhydWtoc2F5eWVkLnRlY2hAZ21haWwuY29tIiwic3RhdHVzIjoib2ZmbGluZSIsImlzQWRtaW4iOiJ1bmRlZmluZWQiLCJtb2JpbGVOdW1iZXIiOiI5MSA3ODQwOTYyODg3IiwiY291bnRyeU5hbWUiOiJJTiIsInVzZXJOYW1lIjoidW5kZWZpbmVkIiwibGFzdE5hbWUiOiJTYXl5ZWQiLCJmaXJzdE5hbWUiOiJTaGFocnVraCIsInVzZXJJZCI6IlNrQkVIZlM5NyJ9fQ.-du1nE9FDeCDVf7fA7JjGVIPcYY7hb9TxvGLH6fYxd0\",\n        \"userDetails\": {\n            \"friendRequestSent\": [],\n            \"friendRequestRecieved\": [],\n            \"friends\": [],\n            \"emailVerified\": \"Yes\",\n            \"validationToken\": \"\",\n            \"email\": \"pankajsingh.tech@gmail.com\",\n            \"mobileNumber\": \"91 7841262887\",\n            \"countryName\": \"IN\",\n            \"lastName\": \"singh\",\n            \"firstName\": \"pankaj\",\n            \"userId\": \"SkBEHfS97\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/reset-password",
    "title": "api for Password Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password reset instructions sent successfully\",\n    \"status\": 200,\n    \"data\": None\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetPassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for Registering User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>country Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User Created\",\n\"status\": 200,\n\"data\": [\n    {\n        \"createdOn\": \"2018-12-12T13:42:58.000Z\",\n        \"emailVerified\": \"Yes\",\n        \"validationToken\": \"Null\",\n        \"email\": \"singhsofttech313@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"91 1234567890\",\n        \"countryName\": \"India\",\n        \"lastName\": \"singh\",\n        \"firstName\": \"pankaj\",\n        \"userId\": \"B1cyuc8OX\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/delete",
    "title": "api to Delete User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": \"2018-12-12T13:42:58.000Z\",\n        \"emailVerified\": \"Yes\",\n        \"validationToken\": \"Null\",\n        \"email\": \"singhpankaj@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"91 7841262887\",\n        \"countryName\": \"India\",\n        \"lastName\": \"singh\",\n        \"firstName\": \"pankaj\",\n        \"userId\": \"B1cyuc8OX\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/logout",
    "title": "api to logout from application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/updatePassword",
    "title": "api for Updating Password after Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "validationToken",
            "description": "<p>validationToken of the user recieved on Email. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersUpdatepassword"
  }
] });
