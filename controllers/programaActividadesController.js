const db = require('../db');
const Joi = require('joi');

const programaActividadesShema = Joi.object({
    codigo: Joi.string().required().messages({
        'any.required': 'El código es obligatorio',
        'string.empty': 'El código no puede estar vacio '
    }),
    descripcion: Joi.string().required().message({
        'any.required': 'La descripción es obligatoria',
        'string.empty': 'La descripción no puede estar vacía',  
    }),
});

exports.getActividades = async (req,res) => {
try {
    const result = await db.query('SELECT * From tbl_programaActividades');
    res.json(result.rows);
} catch (error) {
    console.error('Error al obtener actividades:', error);
    res.status(500).json({error: 'Error al obtener actividades'});

}
};

exports.getActividadById = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await db.query('SELECT * FROM tbl_programaActividades WHERE id = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        }else {
            res.status(404).json({error: 'Actividad no encontrada'});  
        }
    }catch (error) {
        console.error('Error al obtner actividad por ID:', error);
        res.status(500).json({error: 'Error al obtner actividades por ID'});
    }
};

exports.deleteActividades = async (req, res) => {
    const {id} = req.params;
    try{
        const result = await db.query('DELETE FROM tbl_programaActividades WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length > 0) {
            res.json({message: 'Actividad eliminada exitosamente'});
        }else {
            res.status(404).json({error: 'Actividad no encontrada'});

        }
    }catch (error) {
        console.error('Error al eliminar actividad:', error);
        res.status(500).json({error: 'Error al eliminar actividad'});
    }
};

