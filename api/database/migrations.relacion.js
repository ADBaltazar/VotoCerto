ProvinciaModel.hasMany(MunicipioModel,{
    foreignKey:"id_provincia"
})
MunicipioModel.belongsTo(ProvinciaModel,{
    foreignKey:"id_provincia"
})
