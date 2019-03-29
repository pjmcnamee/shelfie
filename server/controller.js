module.exports = {
	getAll: (req,res) => {
	const db = req.app.get('db');

	 db.read_products()
	 .then(products => res.status(200).send(products))
	 .catch(err => {
        res.status(500).send({ errorMessage: 'Getting all products failed - backend' });
        console.log(err);
      })
	},

	create: (req,res) => {
		const db = req.app.get('db');
		const {product_name, product_price, product_imageurl} = req.body

		db.create_product([product_name, product_price, product_imageurl])
		.then(() => res.status(200).send('Created Product!'))
		.catch(err => {
			res.status(500).send({ errorMessage: 'Creating product failed - backend' });
			console.log(err);
		  })
	},

	delete: (req,res) => {
		const db = req.app.get('db');
		const {id} = req.params

		db.delete_product(id)
		.then(products => res.status(200).send(products))
		.catch(err => {
			res.status(500).send({ errorMessage: 'Deleting product failed - backend' });
			console.log(err);
		  })
	},

	update: (req,res) => {
		const db = req.app.get('db');
		const {id} = req.params
		const {product_name, product_price, product_imageurl} = req.body

		db.update_product([id, product_name, product_price, product_imageurl])
		.then(() => res.status(200).send('Updated Product'))
		.catch(err => {
			res.status(500).send({ errorMessage: 'Deleting product failed - backend' });
			console.log(err);
		  })
	}
}