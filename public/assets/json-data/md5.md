```
//��Ȩ�޵�user���ܷ���

{
  "rules": {
    "users": {
      "$uid": {
        // grants write access to the owner of this user account whose uid must exactly match the key ($uid)
        ".write": "auth !== null && auth.uid === $uid",

        // grants read access to any user who is logged in with Twitter
        ".read": "auth !== null"
      }
    }
  }
}

// �κ��˶����Է���

{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```