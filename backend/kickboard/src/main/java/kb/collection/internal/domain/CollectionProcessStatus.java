package kb.collection.internal.domain;

public enum CollectionProcessStatus {
    NOT_EXIST("없음"),
    MOVE("이동"),
    TOW("견인"),
    PARK("세움");

    private String processType;

    CollectionProcessStatus(String processType) {
        this.processType = processType;
    }

    public String getProcessType() {
        return processType;
    }

}
