# Helia-API2

I promise you this one is useful well at least for me 

This time I have a real problem at hand.


# Problem statement

For the past year I have been programming on linux mostly barely touched my windows machine, so one day I was exploring some packages because I couldn't find them on apt and decided it was time to try to manually install, my machine broke, it could be due to manual install or ubuntu security patch, it didn't brake totally but the GUI was gone I had just the TTY.

I could only run one server at a time the terminal was overtaken.
So I want an API with helia to store my files and I will retrieve them on my windows machine before doing a fresh install, yea I tried sorting through the broken packages, no there is no easy fix.

For now I will just send a POST request to retrieve the content of the files on my remote machine and copy it, but we could download it as well.


# Usage 

```
npm install
npm start
```
This basically an extension of Helia-API, with an extra endpoint. This time tough the server will be pinned to your private IP, don't worry it will tell you what is your private IP.
example of testing /readFile endpoint with powershell v5.1 to read from a server running on a linux machine:
```
Invoke-RestMethod -Uri 'http://ipaddress:3000/readfile' -Method Post -Body (@{'filepath'='/home/yourusername/path/to/your/file.extension'} | ConvertTo-Json) -ContentType 'application/json'
```
To read from a server on a windows machine just change the path to match windows and maybe disable your firewall I am not sure.

# Notes

I thought about adding https because why not ! but I did some wiresharking and stuff seems to be encrypted, Thank you https://github.com/ipfs/helia.



