export const reqDataBody = (req, res) => {
  const name = req.body.name;
  const birthPlace = req.body.birthPlace;
  const birthDate = req.body.birthDate;
  const address = req.body.address;
  res.send({
    "Nama": name,
    "Tempat Lahir": birthPlace,
    "Tanggal Lahir": birthDate,
    "Alamat": address
  })
};

export const reqDataQuery = (req, res) => {
  const name = req.query.name;
  const birthPlace = req.query.birthPlace;
  const birthDate = req.query.birthDate;
  const address = req.query.address;
  res.send({
    "Nama": name,
    "Tempat Lahir": birthPlace,
    "Tanggal Lahir": birthDate,
    "Alamat": address
  })
};

