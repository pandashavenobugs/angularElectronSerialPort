String data;
void setup() {
  Serial.begin(9600);
  // put your setup code here, to run once:

}

void loop() {
  if(Serial.available()>0){
    data= Serial.readStringUntil('\n');
    Serial.println(data);
  }

  if(data){
    Serial.println(data);
    delay(1000);
  }
  // put your main code here, to run repeatedly:

}
