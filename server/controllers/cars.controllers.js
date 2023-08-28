import {pool} from '../db.js';

export const getCars = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM cars ORDER BY entryDate DESC');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCar = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM cars WHERE id = ?', [req.params.id]);
    if (result.length === 0)
      return res.status(404).json({ message: "Car not found" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCar = async (req, res) => {
  try {
    const {plateNumber, year, color, entryDate, brand, model} = req.body;
    const [result] = await pool.query(
      'INSERT INTO cars(plateNumber, year, color, entryDate, brand, model) VALUES (?, ?, ?, ?, ?, ?)', 
      [plateNumber, year, color, entryDate, brand, model]
    );
    console.log(result);
    res.json({
      id: result.insertId,
      plateNumber, 
      year, 
      color, 
      entryDate, 
      brand, 
      model
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCar = async (req, res) => {
  try {
    const result = await pool.query('UPDATE cars SET ? WHERE id = ?', [req.body, req.params.id,]);
    res.json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM cars WHERE ID = ?', [req.params.id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Car not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};