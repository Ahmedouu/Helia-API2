# Helia-API2
A video to understand how this api functions basically:
https://www.youtube.com/watch?v=q5bKjuu3kdE&t=32s


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

Is it possible to find the file based on it's name and not the path ? Yes we could recursively search the whole drive but it will make the API slower and dealing with duplicates could be an issue, and the script may not have the necessary access to all the folders we want to search.
