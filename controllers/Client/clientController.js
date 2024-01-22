const Client = require('../../models/Client/Clients');


const ClientController = {
    createClient: async (req, res) => {
        try{
            const newClient = await Client.create(req.body);
            res.json(newClient);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllClients: async (req, res) => {
        try {
            const Clients = await Client.findAll();
            res.json(Clients);
        } catch (error){
            res.status(500).send(error.message);
        }
    },

    getClientById: async (req, res) => {
        try {
            const Clients = await Client.findByPk(req.params.id);
            if(!Clients) {
                return res.status(500).send('Cliente não encontrado!');
            }
            res.json(Clients);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateClient: async (req, res) => {
        try { 
            const Clients = await Client.findByPk(req.params.id);
            if(!Clients){
                return res.status(404).send('Cliente não encontrado!');
            }
            await Clients.update(req.body);
            res.send('Cliente atualizado com sucesso!');    
    } catch ( error ) {
        res.status(500).send(error.message);
    }

},

    deleteClient: async (req, res) => {
        try {
            const Clients = await Client.findByPk(req.params.id);
            if(!Clients){
                return res.status(404).send('Cliente não encontrado!');
            }
            await Clients.destroy();
            res.send('Cliente deletado com sucesso!');
        }  catch (error) {
            res.status(500).send(error.message);
        }
    }

};

module.exports = ClientController;