const skakRepo = require('../models/skak.model');

async function getSkaks(req, res) {
  const skaks = await skakRepo.getSkaks();
  res.json({ skaks });
}

async function getSkak(req, res) {
  const { id } = req.params;
  const skak = await skakRepo.getSkak(id);
  res.json({ skak });
}

async function postSkak(req, res) {
  const { body } = req;
  const { id, turnering, spillerNavn, spillerPoint, modSpillerNavn, modSpillerPoint } = body;

  console.log('Server received data for create:');
  console.log({ id, turnering, spillerNavn, spillerPoint, modSpillerNavn, modSpillerPoint })

  try {
    const skak = await skakRepo.createSkak( {
      turnering, spillerNavn, spillerPoint, modSpillerNavn, modSpillerPoint
    })

    res
      .status(200)
      .json({
        message: 'Ok'
      })

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" })
  }

}

async function putSkak(req, res) {
  const { body } = req;
  const { id, turnering, spillerNavn, spillerPoint, modSpillerNavn, modSpillerPoint } = body;

  console.log('Server received data for update:');
  console.log({ id, turnering, spillerNavn, spillerPoint, modSpillerNavn, modSpillerPoint })

  try {
    const skak = await skakRepo.updateSkak(id, {
      turnering, spillerNavn, spillerPoint, modSpillerNavn, modSpillerPoint
    })

    res
      .status(200)
      .json({
        skak
      })
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" })
  }
}

async function deleteSkak(req, res) {
  const { body } = req;
  const { id, turnering, spillerNavn, spillerPoint, modSpillerNavn, modSpillerPoint } = body;

  console.log('Server received data for delete:');
  console.log({ id, turnering, spillerNavn, spillerPoint, modSpillerNavn, modSpillerPoint })

  try {
    const skak = await skakRepo.deleteSkak(id, {
      turnering, spillerNavn, spillerPoint, modSpillerNavn, modSpillerPoint
    })

    res
      .status(200)
      .json({
        skak
      })
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" })
  }
}


module.exports = {
  getSkaks,
  getSkak,
  postSkak,
  putSkak,
  deleteSkak,
}