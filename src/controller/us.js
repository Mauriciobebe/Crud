const controller = {};


controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('select * from us', (err, usuarios) => {
     if (err) {
      res.json(err);
     }
     res.render('usuarios', {
        data: usuarios
     });
    });
  });
};


controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('insert into us set ?', data, (err, usuario) => {
      console.log(usuario)
      res.redirect('/');
    })
  })
};

//editar datos de la base
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("select * from us where id = ?", [id], (err, rows) => {
      res.render('editus', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newUsuario = req.body;
  req.getConnection((err, conn) => {

  conn.query('update us set ? where id = ?', [newUsuario, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('delete from us where id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;