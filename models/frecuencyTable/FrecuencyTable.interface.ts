export interface FrecuencyTableInterface {

    /**
     * Metodo para mostrar las variables de los datos recolectados
     *
     */
    variables(): Array<any>

    /**
     * Metodo para calcular la frecuencia absoluta
     */
    calcFrecuency(): object

    /**
     * Metodo para calcular la frecuencia absoluta acomulada
     */
    calcCumulativeFrecuency(): object

    /**
     * Metodo para calcular la frecuencia relativa
     */
    calcRelativeFrecuency(): object


    /**
     * Metodo para calcular la frencuencia relativa acumulada
     */
    calcComulativeRelativeFrecuency(): object


}