
export const getMeeTion = (req, res) => {
    res.json({
        msg: 'get all MeeTion API desde el controlador' 
    });
};


// Obtener por ID
export const getMeeTionById = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'get one MeeTion API desde el controlador',
        id
    });
};

// Actualizar (PUT)
export const updateMeeTion = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'put MeeTion API desde el controlador',
        body
    });
};

// Borrar (DELETE)
export const deleteMeeTion = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'delete MeeTion API desde el controlador'
    });
};