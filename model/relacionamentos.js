import  Usuarios  from "./usuarios.js";
import Tarefas from "./tarefas.js";

// Um usuário pode ter muitas tarefas
Usuarios.hasMany(Tarefas, { foreignKey: "usuarioId" });

// Uma tarefa pertence a um usuário
Tarefas.belongsTo(Usuarios, { foreignKey: "usuarioId" });