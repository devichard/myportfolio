import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("Variáveis de ambiente lidas:",{
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EMAIL_TO: process.env.EMAIL_TO
})

const app = express();

const allowedOrigins = [
    'https://myportfolio-ten-silk-98.vercel.app',
    'http://localhost:3000', 
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['POST']
}));

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota pra receber mensagens
app.post("/ContactSection", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }


  try {
    // configura a rota do e-mail
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou outro SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // monta email
    await transporter.sendMail({
      from:process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // Onde recebo
      subject: `Nova mensagem de ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Mensagem: ${message}
      `,
    });

    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao enviar mensagem." });
  }
});

app.get("/", (res) => {
    res.send("Servidor está ativo!");
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
