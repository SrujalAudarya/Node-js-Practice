
public class VarPrint {

    int x = 30;
    static int y = 20;

    public static void main(String[] args) {
        VarPrint t1 = new VarPrint();
        t1.x = 99;
        t1.y = 88;
        int z1 = t1.x + t1.y;
        VarPrint t2 = new VarPrint();
        System.out.println(z1 + " " + t2.x + " " + t2.y);
    }
}
