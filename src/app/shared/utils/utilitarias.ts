import * as moment from "moment";

export function subtrairDatas(data: string) {

    var transformarStringToDate = new Date(data);

    var dataSalva = moment(transformarStringToDate);

    var dataAtual = moment(new Date());

    var duration = moment.duration(dataAtual.diff(dataSalva));
    var hours = duration.asHours();

    return Math.round(hours);

}
