# Helia-API2


# Why make this

For the past year I have been programming on ubuntu, barely touched my windows machine, so one day my machine broke, it could be due to the ubuntu security patch, it didn't brake totally but the GUI was gone I had just the TTY.

Using the TTY is fun but having to nano everytime just to look at some code or some text made me annoyed.

I want an API to read and store a file on IPFS and I will retrieve it on a seperate machine before doing a fresh install, yea I tried sorting through the broken packages, no there is no easy fix, no I don't want to create a repo with all my files and move them into this repo, sometimes I don't even know what file I might want I just want an API running on the broken machine(A), and I send a request from working machine with the path to the file I want from (A).

# Usage 
```
npm install
npm start
```
This basically an extension of https://github.com/Ahmedouu/Helia-API, with an extra endpoint /readFile. 
This time tough the server will be pinned to your private IP, because we need to access the server from a different machine.

example of testing /readFile endpoint with powershell to read from a server running on a linux machine:

```
Invoke-RestMethod -Uri 'http://ipaddress:3000/readfile' -Method Post -Body (@{'filepath'='/home/yourusername/path/to/your/file.extension'} | ConvertTo-Json) -ContentType 'application/json'
```
To read from a server on a windows machine just change the path to match windows and maybe disable your firewall I am not sure.

P.S: Start the server on the machine you want to read from.

# Notes

I thought about adding https because why not ! but I did some wiresharking and the files seems to be encrypted in transit, Thank you https://github.com/ipfs/helia.

# Questions

Is there a way to get mDNS to advertise the server ip so the process becomes more automated ?

Why an API ? can't you just start a node on both machines and read your files, well then I would have to modify the code everytime and restart the server, annoying.

Is it possible to find the file based on it's name and not the path ? Yes but it will make the API slower and dealing with duplicates could be an issue.