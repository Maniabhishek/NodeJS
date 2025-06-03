### This is a tinder like application

Features:
- create account
- User login
- User Profile
- Feed page need feed api
- User Send connection request
- see our matches
- see the request we have sent/received


Low Level Design:
- db design
   - user collection (id, name, age, gender, address, hobbies)
- for user request friend request , we will keep it in seperate collection
  - userRequest (id, fromRequest, toRequest, status)

API overview:
- Post /signup
- Post /login
- Get /profile
- Post /profile
- patch /profile
- Delete /profile
- Post /sendRequest with status ignore , interested rejected
- Post /reviewRequest with status accept , reject, ignore
- Get /requests 
- Get /connections
