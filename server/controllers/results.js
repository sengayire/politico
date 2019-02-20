exports.electionResult = async function (req, res) {
    try {
        const { id } = req.params;
        // Check if office exists
        const office = await pool.query('SELECT * FROM offices WHERE id=$1', [id]);
        if (office.rows.length === 0) {
            return res.status(404).json({
                status: 404,
                error: `The office of id: <${id}> does not exist.`
            });
        }
        // Fetch election result for all offices order by highest votes?
        const result = await pool.query('SELECT office, candidate, COUNT(candidate) AS result FROM votes WHERE office=$1 GROUP BY office, candidate', [id]);
        if (result.rows.length !== 0) {
            return res.status(200).json({
                status: 200,
                data: result.rows
            });
        }
        return res.status(404).json({
            status: 404,
            message: 'Election results not found.'
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: 'Internal server error'
        });
    }
};