#!/bin/sh

# definir la siguiente variable aquí o usarla como variable de entorno,
# debe ser el ejecutable local de jmeter 3.3
#JMETER_PATH=

CSV_PATH=test/pruebasPerformance/csv_desarrollo.txt
JMX_PATH=test/pruebasPerformance/pruebaPerformance.jmx

if [ -z "$JMETER_PATH" ]; then
    echo "variable JMETER_PATH no definida"
    echo "definir la variable al path del ejecutable de jmeter 3.3"
    exit 1;
fi

$JMETER_PATH \
-t $JMX_PATH \
-JconcurrenciaObjetivo=1 \
-JincrementoEnSegundos=1 \
-JnumeroDeIncrementos=0 \
-JmantenerTasaObjetivoPorNSegundos=1 \
-JlimiteDeIteraciones=1 \
-Jhostname=localhost \
-Jport=3000 \
-Jport_osvt=3002 \
-Jport_ocvt=3001 \
-Jprotocol=http \
-Jexternal_hostname=172.17.200.7 \
-Jexternal_port_osvt=443 \
-Jexternal_port_ocvt=443 \
-Jexternal_protocol=https \
-Jexternal_hostname_pd=172.17.200.33 \
-j /tmp/jmeter.log -l /tmp/jmeter_results.log \
-Jcsvfile=$CSV_PATH
