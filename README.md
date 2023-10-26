# Helia-API2

I promise you this one is useful well at least for me 


# Why make this

For the past year I have been programming on ubuntu, barely touched my windows machine, so one day I was exploring some packages because I couldn't find them on apt and decided it was time to try to manually install, my machine broke, it could be due to manual install or ubuntu security patch, it didn't brake totally but the GUI was gone I had just the TTY.

I could only run one server at a time and the terminal was overtaken.
So I want an API to read and store a file on IPFS and I will retrieve it on a seperate machine before doing a fresh install, yea I tried sorting through the broken packages, no there is no easy fix.

For now I will just send a POST request to retrieve the content of the files on my remote machine and copy it, but we could download it as well.

# Usage 

```
npm install
npm start
```
This basically an extension of https://github.com/Ahmedouu/Helia-API, with an extra endpoint /readFile. 
This time tough the server will be pinned to your private IP, don't worry it will tell you what is your private IP.
example of testing /readFile endpoint with powershell v5.1 to read from a server running on a linux machine:
```
Invoke-RestMethod -Uri 'http://ipaddress:3000/readfile' -Method Post -Body (@{'filepath'='/home/yourusername/path/to/your/file.extension'} | ConvertTo-Json) -ContentType 'application/json'
```
To read from a server on a windows machine just change the path to match windows and maybe disable your firewall I am not sure.

# Notes

I thought about adding https because why not ! but I did some wiresharking and the files seems to be encrypted in transit, Thank you https://github.com/ipfs/helia.

# Questions

is there a way to get mDNS to advertise the server ip so the process becomes more automated ?

