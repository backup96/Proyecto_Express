const guardarDB = require("../helpers/guardarArchivo");
const Tarea = require("./crear");
const archivo2 = "./db/data.json";
const fs = require("fs").promises;
var colors = require("colors");

class Tareas {
  async listadoArr() {
    try {
      const data = await fs.readFile(archivo2, "utf8");
      console.log(data)

      const contenido = JSON.parse(data);
      console.log(
        `${
          "--------------------------------------------------------------------------------"
            .yellow
        }\n${"|".yellow}                                       ${
          "|".yellow
        }                                      ${"|".yellow}\n${
          "|".yellow
        }             ${"Id de la tarea".red}            ${
          "|".yellow
        }               ${"Detalles".red}               ${"|".yellow}\n${
          "|".yellow
        }                                       ${
          "|".yellow
        }                                      ${"|".yellow}\n${
          "--------------------------------------------------------------------------------"
            .yellow
        }`
      );
      contenido.tareas.forEach((tarea) => {
        var text = "";
        const space = " ";
        for (let i = 0; i < Math.ceil(tarea.desc.length / 20); i++) {
          if (tarea.desc.length <= 20) {
            text = `${tarea.desc.slice(i * 20, i * 20 + 20)}${space.repeat(
              (i + 1) * 20 - tarea.desc.length + 2
            )}${"|".yellow}\n`;
          } else if (i === 0) {
            text = `${tarea.desc.slice(i * 20, i * 20 + 20)}  ${"|".yellow}\n`;
          } else if (i + 1 === Math.ceil(tarea.desc.length / 20)) {
            text = `${text}${
              "|".yellow
            }                                       ${
              "|".yellow
            }                ${tarea.desc.slice(
              i * 20,
              i * 20 + 20
            )}${space.repeat((i + 1) * 20 - tarea.desc.length + 2)}${
              "|".yellow
            }\n`;
          }
        }
        console.log(
          `${"|".yellow}  ${tarea.id} ${"|".yellow}   ${
            "Descripción:".green
          } ${text}${"|".yellow}                                       ${
            "|".yellow
          }   ${"Estado:"} ${tarea.completadoEn}                  ${
            "|".yellow
          }\n${
            "--------------------------------------------------------------------------------"
              .yellow
          }`
        );
      });
    } catch (err) {
      console.error("Error al leer el archivo:", err);
    }
  }

  async listadoArrCompleto() {
    try {
      const data = await fs.readFile(archivo2, "utf8");

      const contenido = JSON.parse(data);
      console.log(
        `${
          "--------------------------------------------------------------------------------"
            .yellow
        }\n${"|".yellow}                                       ${
          "|".yellow
        }                                      ${"|".yellow}\n${
          "|".yellow
        }             ${"Id de la tarea".red}            ${
          "|".yellow
        }               ${"Detalles".red}               ${"|".yellow}\n${
          "|".yellow
        }                                       ${
          "|".yellow
        }                                      ${"|".yellow}\n${
          "--------------------------------------------------------------------------------"
            .yellow
        }`
      );
      contenido.tareas.forEach((tarea) => {
        var text = "";
        const space = " ";
        if (tarea.completadoEn === "Completada") {
          for (let i = 0; i < Math.ceil(tarea.desc.length / 20); i++) {
            if (tarea.desc.length <= 20) {
              text = `${tarea.desc.slice(i * 20, i * 20 + 20)}${space.repeat(
                (i + 1) * 20 - tarea.desc.length + 2
              )}${"|".yellow}\n`;
            } else if (i === 0) {
              text = `${tarea.desc.slice(i * 20, i * 20 + 20)}  ${
                "|".yellow
              }\n`;
            } else if (i + 1 === Math.ceil(tarea.desc.length / 20)) {
              text = `${text}${
                "|".yellow
              }                                       ${
                "|".yellow
              }                ${tarea.desc.slice(
                i * 20,
                i * 20 + 20
              )}${space.repeat((i + 1) * 20 - tarea.desc.length + 2)}${
                "|".yellow
              }\n`;
            }
          }
          console.log(
            `${"|".yellow}  ${tarea.id} ${"|".yellow}   ${
              "Descripción:".green
            } ${text}${"|".yellow}                                       ${
              "|".yellow
            }   ${"Estado:"} ${tarea.completadoEn}                  ${
              "|".yellow
            }\n${
              "--------------------------------------------------------------------------------"
                .yellow
            }`
          );
        }
      });
    } catch (err) {
      console.error("Error al leer el archivo:", err);
    }
  }

  async listadoArrPendiente() {
    try {
      const data = await fs.readFile(archivo2, "utf8");

      const contenido = JSON.parse(data);
      console.log(
        `${
          "--------------------------------------------------------------------------------"
            .yellow
        }\n${"|".yellow}                                       ${
          "|".yellow
        }                                      ${"|".yellow}\n${
          "|".yellow
        }             ${"Id de la tarea".red}            ${
          "|".yellow
        }               ${"Detalles".red}               ${"|".yellow}\n${
          "|".yellow
        }                                       ${
          "|".yellow
        }                                      ${"|".yellow}\n${
          "--------------------------------------------------------------------------------"
            .yellow
        }`
      );
      contenido.tareas.forEach((tarea) => {
        var text = "";
        const space = " ";
        if (tarea.completadoEn === "Pendiente") {
          for (let i = 0; i < Math.ceil(tarea.desc.length / 20); i++) {
            if (tarea.desc.length <= 20) {
              text = `${tarea.desc.slice(i * 20, i * 20 + 20)}${space.repeat(
                (i + 1) * 20 - tarea.desc.length + 2
              )}${"|".yellow}\n`;
            } else if (i === 0) {
              text = `${tarea.desc.slice(i * 20, i * 20 + 20)}  ${
                "|".yellow
              }\n`;
            } else if (i + 1 === Math.ceil(tarea.desc.length / 20)) {
              text = `${text}${
                "|".yellow
              }                                       ${
                "|".yellow
              }                ${tarea.desc.slice(
                i * 20,
                i * 20 + 20
              )}${space.repeat((i + 1) * 20 - tarea.desc.length + 2)}${
                "|".yellow
              }\n`;
            }
          }
          console.log(
            `${"|".yellow}  ${tarea.id} ${"|".yellow}   ${
              "Descripción:".green
            } ${text}${"|".yellow}                                       ${
              "|".yellow
            }   ${"Estado:"} ${tarea.completadoEn}                  ${
              "|".yellow
            }\n${
              "--------------------------------------------------------------------------------"
                .yellow
            }`
          );
        }
      });
    } catch (err) {
      console.error("Error al leer el archivo:", err);
    }
  }

  async completarTarea(id) {
    const data = await fs.readFile(archivo2, "utf8");

    const contenido = JSON.parse(data);

    const upDateEst = contenido.tareas.map((item) =>
      item.id === id ? { ...item, completadoEn: "Completada" } : item
    );
    
    const arrTarea = {
      tareas: upDateEst,
    };

    fs.writeFile(archivo2, JSON.stringify(arrTarea, null, 2), function (err) {
      if (err) throw err;
    });
  }

  crearTarea(data = "") {
    var text = "";
    const space = " ";
    const tarea = new Tarea(data);
    for (let i = 0; i < Math.ceil(tarea.desc.length / 20); i++) {
      if (tarea.desc.length <= 20) {
        text = `${tarea.desc.slice(i * 20, i * 20 + 20)}${space.repeat(
          (i + 1) * 20 - tarea.desc.length + 2
        )}|\n`;
      } else if (i === 0) {
        text = `${tarea.desc.slice(i * 20, i * 20 + 20)}  |\n`;
      } else if (i + 1 === Math.ceil(tarea.desc.length / 20)) {
        text = `${text}|                                       |                ${tarea.desc.slice(
          i * 20,
          i * 20 + 20
        )}${space.repeat((i + 1) * 20 - tarea.desc.length + 2)}|\n`;
      }
    }
    const plant = `|  ${tarea.id} |   Descripción: ${text}|                                       |   Estado: ${tarea.completadoEn}                  |\n--------------------------------------------------------------------------------\n`;
    if (tarea.desc.length > 0) {
      guardarDB(plant, tarea);
    }
  }
}
module.exports = Tareas;
