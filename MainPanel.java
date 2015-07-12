public class MainPanel extends JPanel implements ActionListener
{
    TitlePanel() titleP = new TitlePanel();
    private JTextArea ageInput; 
    public MainPanel()
    {
        setLayout(null);
        setBackground(Color.PINK);
        titleP.setBounds(1,1,1,1);
        ageInput = new JTextArea
        
        add(titleP);
        

    }
    class TitlePanel extends JPanel
    {
        public TitlePanel()
        {
            setPreferredSize(new Dimension(40,100));
        }
        
        public void paintComponent(Graphics g)
        {
               super.paintComponent(g);
        }
    }
}