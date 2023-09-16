### Created from tutorial
[Full-Stack React & Node.js - Database!](https://dev.to/neohed/full-stack-react-nodejs-database-3c3l)

npx prisma db push
npx prisma generate

npx prisma db seed

### "Application state med CURL"
POST: 
curl -X POST --json '{ "turnering": "Stormestrenes skak turnering", "spillerNavn": "Mette1", "spillerPoint": "1", "modSpillerNavn": "Jesper1", "modSpillerPoint": "1" }' http://localhost:4011/skak
eller
curl -X POST -d "turnering=Stormestrenes skak turnering" -d "spillerNavn=Mette1" -d "spillerPoint=1" -d "modSpillerNavn=Jesper1" -d "modSpillerPoint=1" http://localhost:4011/skak

PUT:
curl -X PUT --json '{ "id": "clmmm33730003whesgz2qoek4", "turnering": "Stormestrenes skak turnering neddateret", "spillerNavn": "Mette1", "spillerPoint": "1", "modSpillerNavn": "Jesper1", "modSpillerPoint": "1" }' http://localhost:4011/skak
eller
curl -X PUT -d "id=clmmm33730003whesgz2qoek4" -d "turnering=Stormestrenes skak turnering opdateret" -d "spillerNavn=Mette1" -d "spillerPoint=1" -d "modSpillerNavn=Jesper1" -d "modSpillerPoint=1" http://localhost:4011/skak

GET: 
curl -X GET http://localhost:4011/skak/clmmm33730003whesgz2qoek4

DELETE: -X
curl -X DELETE -d "id=clmmm33730003whesgz2qoek4" http://localhost:4011/skak